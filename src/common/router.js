import { Route,Routes,useLocation} from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import TestEntry from '../pages/TestEntry';
import Patients from '../pages/PatientList';
import Purchase from '../pages/Purchase';
import PurchaseDetails from '../pages/PurchaseDetails';
import Tests from '../pages/Tests';
import NewGroup from '../pages/NewGroup';
import NewItem from '../pages/NewItem';
import LoginPage from '../pages/Login';

function Proutes() {

    const location = useLocation();
    return (
      <Routes location={location} key={location.pathname}>
        <Route path='/' exact>
            <Route path='/' exact element={<Dashboard/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='testentry' element={<TestEntry/>}/>
            <Route path='patients' element={<Patients/>}/>
            <Route path='purchase' element={<Purchase/>}/>
            <Route path='purchasedetails' element={<PurchaseDetails/>}/>
            <Route path='tests' element={<Tests/>}/>
            <Route path='newgroup' element={<NewGroup/>}/>
            <Route path='newitem' element={<NewItem/>}/>
        </Route>

      </Routes>
  )
}

export default Proutes