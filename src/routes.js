import React from "react";

const Routes = () => {
    return (
      <BrowserRouter>
        <Header></Header>
        <CarouselDefault></CarouselDefault>
        <main className='px-3 m-3'>
          <Switch>
            <Route exact path="/blog" component={BlogPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    );
  };
  
  export default Routes;