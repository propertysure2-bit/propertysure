import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xgcpfumuhvksfzwnqgag.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || 'sb_publishable_2jPAfV7FFxeLDyNGJlj91A_y590safb';

export const supabase = createClient(supabaseUrl, supabaseKey);
