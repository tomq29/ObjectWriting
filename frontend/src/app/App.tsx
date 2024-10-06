import { Button } from '@/shared/ui/button';

function App() {
  function butHandler() {
    console.log('shandcn');
  }

  return (
    <>
      hello
      <Button onClick={butHandler}>first button</Button>
    </>
  );
}

export default App;
