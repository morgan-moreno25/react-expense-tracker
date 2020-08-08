import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import MonetizationIcon from '@material-ui/icons/MonetizationOn';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Typography } from '@material-ui/core';


class Header extends React.Component {
    title = 'Rocket Finance';
    githubLink = 'https://www.github.com/morgan-moreno25';
    twitterLink = 'https://www.twitter.com/morganm222';

    render(){
        return (
        <AppBar id="main-header">
            <Icon id="logo"><MonetizationIcon fontSize="large"></MonetizationIcon></Icon>
            <Typography variant="h3">{ this.title }</Typography>
            <Link href={ this.githubLink } id="github"><GithubIcon fontSize="large"></GithubIcon></Link>
            <Link href={ this.twitterLink } id="twitter"><TwitterIcon fontSize="large"></TwitterIcon></Link>
        </AppBar>
    )};
};
export default Header;