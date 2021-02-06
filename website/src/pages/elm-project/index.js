import React, {useEffect, useRef} from 'react';
import Layout from '@theme/Layout';
import {Elm} from '../../../../elm-project/src/Main';

function ElmProject() {
  const elmNode = useRef(null);
  useEffect(() => {
    Elm.Main.init({
      node: elmNode.current,
    });
  }, []);
  return (
    <Layout>
      <div ref={elmNode}></div>
    </Layout>
  );
}

export default ElmProject;
