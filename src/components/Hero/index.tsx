import * as React from 'react';
import { Text, Field } from '@sitecore-jss/sitecore-jss-react';

type HeroProps = {
  fields: {
    heading: Field<string>;
  }
}

const Hero =(props:HeroProps):JSX.Element => {
  return (
    <div>
      <p>Hero Component</p>
      <Text field={props.fields.heading} />
    </div>
  )
}

export default Hero;