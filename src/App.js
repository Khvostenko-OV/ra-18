import './App.css';
import ServiceEdit from './components/ServiceEdit';
import ServiceList from './components/ServiceList';

export default function App() {
  return (
    <div className="body">
      <ServiceEdit/>
      <ServiceList/>
    </div>
  );
}
