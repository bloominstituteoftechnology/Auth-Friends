import React from 'react';
import NavigationCard from './NavigationCard';


class Navigation extends React.Component {

    render() {
        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a href={link.link}>{link.label}</a>
            ) : (
                    <a href={link.link}>{link.label}</a>
                );

            return (
                <li key={index} >
                    {linkMarkup}
                </li>
            );
        });

        return (

            <nav >

                <div>

                    <ul>
                        <NavigationCard /> {linksMarkup}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;




