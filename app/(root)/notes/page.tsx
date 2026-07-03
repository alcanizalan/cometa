import styles from './page.module.css';
import { supabase } from '@/lib/supabase';

async function getNotes() {
  const { data, error } = await supabase
    .from('note')
    .select('*');
    
  if (error) {
    console.error('Error cargando notas:', error);
    return [];
  }
  
  return data;
}

export default async function Notes() {
  const notes = await getNotes();   

  return (
    <main className={styles.main}>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </main>
  );
}