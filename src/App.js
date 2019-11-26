import React from "react";
import ReactFullHeight from "react-full-height";

import "./App.css";

function App() {
  return (
    <main className="App">
      <a
        className="fork-wr"
        href="https://github.com/qmixi/react-full-height"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
          alt="Fork me on GitHub"
        />
      </a>
      <ReactFullHeight className="App-header" title="test" id="section1">
        <h1>React FullHeight</h1>
        <a
          className="App-link"
          href="https://github.com/qmixi/react-full-height"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </ReactFullHeight>
      <ReactFullHeight
        className="App-header App-header-responsive"
        startWidth={450}
        title="test"
        id="section1"
      >
        <h1>{`startWidth={450}`}</h1>
        <a
          className="App-link"
          href="https://github.com/qmixi/react-full-height#make-your-full-height-section-responsive"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about <b>startWidth</b> and <b>endWidth</b> props
        </a>
      </ReactFullHeight>
      <ReactFullHeight
        className="App-header App-header-exceed"
        title="test"
        id="section1"
        canExceed
      >
        <h1>{`canExceed={true}`}</h1>
        <a
          className="App-link"
          href="https://github.com/qmixi/react-full-height#follow-the-content-height-when-it-exceeds-the-viewport-height"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about <b>canExceed</b> prop
        </a>
        <p className="App-text">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?" "But I must
          explain to you how all this mistaken idea of denouncing pleasure and
          praising pain was born and I will give you a complete account of the
          system, and expound the actual teachings of the great explorer of the
          truth, the master-builder of human happiness. No one rejects,
          dislikes, or avoids pleasure itself, because it is pleasure, but
          because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?"
        </p>
      </ReactFullHeight>
      <ReactFullHeight
        className="App-header App-header-cantexceed"
        title="test"
        id="section1"
      >
        <h1>{`canExceed={false}`}</h1>
        <p className="App-text">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?" "But I must
          explain to you how all this mistaken idea of denouncing pleasure and
          praising pain was born and I will give you a complete account of the
          system, and expound the actual teachings of the great explorer of the
          truth, the master-builder of human happiness. No one rejects,
          dislikes, or avoids pleasure itself, because it is pleasure, but
          because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?"
        </p>
      </ReactFullHeight>
    </main>
  );
}

export default App;
