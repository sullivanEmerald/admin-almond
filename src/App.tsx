
import AdminRoutes from '@/admin/routes/routes';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <AdminRoutes />
      </Router>
    </>
  )
}

export default App;
