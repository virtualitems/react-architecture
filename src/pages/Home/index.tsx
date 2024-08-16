// Libraries

import React from 'react';

// Components

// Hooks

// Features

import CSSModule from '../../utils/CSSModule';

// Languages

import es from './languages/es.json';

// Styles

import css from './styles.module.css';

// Types

type TProps = React.HTMLProps<HTMLElement> & {};

// Constants


/**
 * @description 
 */
export default function Home(props: TProps): React.ReactElement
{

  const styles = new CSSModule(css);

  return (
    <div>
      <h1 className={styles.get('title')} >{es.h1}</h1>
      <p>{es.p}</p>
      <div>
        {props.children}
      </div>
    </div>
  );

} //:: ReactElement
