import React, { Suspense, lazy } from 'react';


const TaskForm = lazy(() => import('./task'));
const TaskList = lazy(() => import('./tasklist'));

function App() {
  return (
    
      <div>
        <h1>Task Manager</h1>
        <Suspense fallback={<div>Loading Task Form...</div>}>
          <TaskForm />
        </Suspense>
        <Suspense fallback={<div>Loading Task List...</div>}>
          <TaskList />
        </Suspense>
      </div>
    
  );
}

export default App;

