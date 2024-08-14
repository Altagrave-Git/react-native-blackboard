import { createRoot } from 'react-dom/client';
import { WebEditor } from './webEditor';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<WebEditor />);
