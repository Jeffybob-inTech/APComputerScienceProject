
  import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

  const supabaseUrl = "https://ygprzqbamrfqavbvawdf.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncHJ6cWJhbXJmcWF2YnZhd2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MTEzNTEsImV4cCI6MjA2MzA4NzM1MX0.Q43sW859MrdSgpMBIWZbJ3i_aJPgHqwBW7xtPkju280";

  const supabase = createClient(supabaseUrl, supabaseKey);

  async function fetchNumberOfPopcornItems() {
    const { data, error } = await supabase
      .from('Popcorn Items')
      .select('*', { count: 'exact' });

    if (error) {
      console.error('Error fetching number of popcorn items:', error);
    } else {
      console.log('Number of popcorn items:', data);
    }
  }

  fetchNumberOfPopcornItems();





async function addPopcornItem(newItem) {
  const { data, error } = await supabase
    .from('Popcorn Items')
    .insert([newItem]); // Example: { name: 'Cheddar', price: 5 }

  if (error) {
    console.error('Error adding item:', error);
  } else {
    console.log('Item added:', data);
    await fetchNumberOfPopcornItems(); // Re-fetch and re-render list
  }
}
addPopcornItem({ name: 'Cheddar', price: 5 });