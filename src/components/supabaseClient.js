
//supabase
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://duxmgiqmehqlfomfvqmj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1eG1naXFtZWhxbGZvbWZ2cW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2NzI4MTAsImV4cCI6MjAyNjI0ODgxMH0.Eg7L00MJMtsVsffRv4tNYycu0whOcmEfJiiil4K6cMc')

//supabase end
export default supabase; 