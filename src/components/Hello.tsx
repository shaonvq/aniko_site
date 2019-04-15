import * as React from 'react';

export interface IAppProps {
    name: string;
    interest: number;
    handleIncrement?: () => void;
    handleDecrement?: () => void;
}

// tslint:disable-next-line: no-empty-interface
export interface IAppState {};

export default class IApp extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    if(this.props.interest <= 0){
        throw new Error('Interest too low.')
    }
  }

  public render() {
    return (
      <div>
        <p>{name}</p>
        interest: {this.props.interest}
        <hr/>
        <button onClick={this.props.handleIncrement} >increment</button>
        <button onClick={this.props.handleDecrement} >Decrement</button>
      </div>
    );
  }
}
