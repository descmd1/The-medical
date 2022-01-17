import Table from './Table'
import Register1 from '../src/assests/register1.xml'
import Register2 from '../src/assests/register2.xml'
import Register3 from '../src/assests/register3.xml'


const App = () => {
  return (
    <div>
    <Table register={Register1}/>
    <Table register={Register2}/>
    <Table register={Register3}/>
    </div>
  )
}

export default App;
