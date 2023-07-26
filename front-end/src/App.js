import Header from "./Components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Home from "./Pages/Home";
import NotFound from "./Pages/Notfound";
import Project from "./Pages/Project";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
    <BrowserRouter>
        <Header />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/projects/:id" element={<Project/>}></Route>

            <Route path="*" element={<NotFound/>}></Route>

          </Routes>
         
        </div>
      </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
