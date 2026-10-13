-- ==============================================================================
-- CONNECTUP: PITCH EDIT & DECK MIGRATION SCRIPT
-- Run this in Supabase SQL Editor (or PostgreSQL console)
-- Enables: Valuation Cap, Website URL, Social/Deck Links, Traction Wins,
--          Multi-pitch editing, and Row-Level Security (RLS) policies.
-- ==============================================================================

-- 1. Ensure columns exist on public.pitches
DO $$
BEGIN
    -- Ensure pitches table exists
    CREATE TABLE IF NOT EXISTS public.pitches (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
        name TEXT NOT NULL,
        one_liner TEXT,
        description TEXT,
        industry TEXT,
        funding_stage TEXT,
        ask_amount NUMERIC DEFAULT 0,
        valuation_cap NUMERIC DEFAULT 0,
        website_url TEXT,
        social_media_url TEXT,
        wins TEXT[] DEFAULT '{}',
        image_url TEXT,
        video_url TEXT,
        tags TEXT[] DEFAULT '{}',
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
    );

    -- Valuation Cap
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pitches' AND column_name = 'valuation_cap') THEN
        ALTER TABLE public.pitches ADD COLUMN valuation_cap NUMERIC DEFAULT 0;
    END IF;

    -- Website URL
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pitches' AND column_name = 'website_url') THEN
        ALTER TABLE public.pitches ADD COLUMN website_url TEXT;
    END IF;

    -- Social Media / Deck Link
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pitches' AND column_name = 'social_media_url') THEN
        ALTER TABLE public.pitches ADD COLUMN social_media_url TEXT;
    END IF;

    -- Traction Wins & Key Milestones
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pitches' AND column_name = 'wins') THEN
        ALTER TABLE public.pitches ADD COLUMN wins TEXT[] DEFAULT '{}';
    END IF;

    -- Target Ask Amount
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pitches' AND column_name = 'ask_amount') THEN
        ALTER TABLE public.pitches ADD COLUMN ask_amount NUMERIC DEFAULT 0;
    END IF;

    -- Video URL
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pitches' AND column_name = 'video_url') THEN
        ALTER TABLE public.pitches ADD COLUMN video_url TEXT;
    END IF;

    -- Image URL
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pitches' AND column_name = 'image_url') THEN
        ALTER TABLE public.pitches ADD COLUMN image_url TEXT;
    END IF;

    -- Tags
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pitches' AND column_name = 'tags') THEN
        ALTER TABLE public.pitches ADD COLUMN tags TEXT[] DEFAULT '{}';
    END IF;

    -- Active Pitch Flag
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pitches' AND column_name = 'is_active') THEN
        ALTER TABLE public.pitches ADD COLUMN is_active BOOLEAN DEFAULT true;
    END IF;

    -- Updated At
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pitches' AND column_name = 'updated_at') THEN
        ALTER TABLE public.pitches ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL;
    END IF;
END $$;

-- 2. Ensure columns exist on public.startups (Primary Venture Showcase)
DO $$
BEGIN
    -- Valuation Cap
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'startups' AND column_name = 'valuation_cap') THEN
        ALTER TABLE public.startups ADD COLUMN valuation_cap NUMERIC DEFAULT 0;
    END IF;

    -- Website URL
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'startups' AND column_name = 'website_url') THEN
        ALTER TABLE public.startups ADD COLUMN website_url TEXT;
    END IF;

    -- Social Media / Deck Link
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'startups' AND column_name = 'social_media_url') THEN
        ALTER TABLE public.startups ADD COLUMN social_media_url TEXT;
    END IF;

    -- Traction Wins & Key Milestones
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'startups' AND column_name = 'wins') THEN
        ALTER TABLE public.startups ADD COLUMN wins TEXT[] DEFAULT '{}';
    END IF;

    -- Ask Amount
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'startups' AND column_name = 'ask_amount') THEN
        ALTER TABLE public.startups ADD COLUMN ask_amount NUMERIC DEFAULT 0;
    END IF;

    -- Video URL
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'startups' AND column_name = 'video_url') THEN
        ALTER TABLE public.startups ADD COLUMN video_url TEXT;
    END IF;

    -- Tags
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'startups' AND column_name = 'tags') THEN
        ALTER TABLE public.startups ADD COLUMN tags TEXT[] DEFAULT '{}';
    END IF;

    -- Updated At
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'startups' AND column_name = 'updated_at') THEN
        ALTER TABLE public.startups ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL;
    END IF;
END $$;

-- 3. Indexes for fast query lookup
CREATE INDEX IF NOT EXISTS idx_pitches_user_id ON public.pitches(user_id);
CREATE INDEX IF NOT EXISTS idx_pitches_is_active ON public.pitches(is_active);
CREATE INDEX IF NOT EXISTS idx_startups_updated_at ON public.startups(updated_at DESC);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.pitches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.startups ENABLE ROW LEVEL SECURITY;

-- 5. Row Level Security Policies for Pitches
DROP POLICY IF EXISTS "Pitches are viewable by everyone" ON public.pitches;
CREATE POLICY "Pitches are viewable by everyone" 
ON public.pitches FOR SELECT 
USING (true);

DROP POLICY IF EXISTS "Users can insert their own pitches" ON public.pitches;
CREATE POLICY "Users can insert their own pitches" 
ON public.pitches FOR INSERT 
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own pitches" ON public.pitches;
CREATE POLICY "Users can update their own pitches" 
ON public.pitches FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own pitches" ON public.pitches;
CREATE POLICY "Users can delete their own pitches" 
ON public.pitches FOR DELETE 
USING (auth.uid() = user_id);

-- 6. Row Level Security Policies for Startups
DROP POLICY IF EXISTS "Startups are viewable by everyone" ON public.startups;
CREATE POLICY "Startups are viewable by everyone" 
ON public.startups FOR SELECT 
USING (true);

DROP POLICY IF EXISTS "Users can insert their own startup" ON public.startups;
CREATE POLICY "Users can insert their own startup" 
ON public.startups FOR INSERT 
WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own startup" ON public.startups;
CREATE POLICY "Users can update their own startup" 
ON public.startups FOR UPDATE 
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- 7. Automatic timestamp trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_pitches_updated_at ON public.pitches;
CREATE TRIGGER set_pitches_updated_at
    BEFORE UPDATE ON public.pitches
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_startups_updated_at ON public.startups;
CREATE TRIGGER set_startups_updated_at
    BEFORE UPDATE ON public.startups
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- 8. Reload Schema Cache for PostgREST
NOTIFY pgrst, 'reload schema';
