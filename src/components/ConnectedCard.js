import React from 'react';
import { Card, EthAddress, Text, Button } from 'rimble-ui';

export class ConnectedCard extends React.Component {
    render() {
        return (
        <Card width={"40%"}>
        <div>
            <EthAddress address={this.props.wallet.account}/>
            <Text>Balance: {(this.props.wallet.balance / 1e18).toFixed(3)} ETH</Text>
            <Text>Network: {this.props.wallet.networkName}</Text>
            <Button onClick={() => this.props.wallet.deactivate()}>disconnect</Button>
        </div>
        </Card>
        )
    }
}
