import React, { Component } from 'react';
import '../assets/styles/Adventure.css';
import Lightbox from 'react-images';


import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: "RGBA(235, 236, 240, 1.00)",
        fontSize: "20px",
        fontFamily: 'Avenir Next Light'
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

const images = [
    {
        img: "/assets/images/adventure/Alaska_7.jpg",
        title: "Alaska",
    },
    {
        img: "/assets/images/adventure/Alaska_9.jpg",
        title: "Alaska",
    },
    {
        img: "/assets/images/adventure/Alaska_8.jpg",
        title: "Alaska",
    },
    {
        img: "/assets/images/adventure/Alaska_4.jpg",
        title: "Alaska",
    },
    {
        img: "/assets/images/adventure/Alaska_5.jpg",
        title: "Alaska",
    },
    {
        img: "/assets/images/adventure/Grand_Canyon_1.jpg",
        title: "Arizona - Grand Canyon",
    },
    {
        img: "/assets/images/adventure/CO_Sand_Dunes.jpg",
        title: "Colorado - Great Sand Dunes National Park",
    },
    {
        img: "/assets/images/adventure/Mountain_Biking.jpg",
        title: "Colorado - Georgia Pass"
    },
    {
        img: "/assets/images/adventure/Costa_Rica_Zip_Line_2.jpeg",
        title: "Costa Rica",
    },
    {
        img: "/assets/images/adventure/Costa_Rica_1.jpeg",
        title: "Costa Rica",
    },
    {
        img: "/assets/images/adventure/Costa_Rica_2.jpeg",
        title: "Costa Rica",
    },
    {
        img: "/assets/images/adventure/Costa_Rica_Zip_Line_1.jpeg",
        title: "Costa Rica",
    },
    {
        img: "/assets/images/adventure/GA_Brown_2.jpeg",
        title: "Georgia",
    },
    {
        img: "/assets/images/adventure/Wildcat_Hills.jpeg",
        title: "Nebraska",
    },
    {
        img: "/assets/images/adventure/Sky_Diving_1.png",
        title: "Tennessee - Sky Diving",
    },
    {
        img: "/assets/images/adventure/Harpeth_Bass_2.jpeg",
        title: "Tennessee",
    },
    {
        img: "/assets/images/adventure/Harpeth_Bass_3.jpeg",
        title: "Tennessee",
    },
    {
        img: "/assets/images/adventure/Harpeth_Bluegill.jpeg",
        title: "Tennessee",
    },
    {
        img: "/assets/images/adventure/Pond_Bass.jpeg",
        title: "Tennessee",
    },
    {
        img: "/assets/images/adventure/Buffalo_Brookie.jpeg",
        title: "Virginia",
    },
    {
        img: "/assets/images/adventure/Charity_Backpacking.jpeg",
        title: "Virginia",
    },
    {
        img: "/assets/images/adventure/Scuba_Certified.jpeg",
        title: "Virginia - SCUBA Certification",
    },
    {
        img: "/assets/images/adventure/Spelunking.jpg",
        title: "Virginia - Speulunking",
    },
    {
        img: "/assets/images/adventure/Spelunking_3.jpeg",
        title: "Virginia - Spelunking",
    },
    {
        img: "/assets/images/adventure/Devils_Marbleyard_2.jpeg",
        title: "Virginia - Devil's Marbleyard",
    },
    {
        img: "/assets/images/adventure/Spy_Rock.jpeg",
        title: "Virginia - Spy Rock",
    },
    {
        img: "/assets/images/adventure/SnowFlex.jpg",
        title: "Virginia - Skiing Snow Flex"
    },
    {
        img: "/assets/images/adventure/Fly_Fishing_1.jpeg",
        title: "Virginia",
    },
    {
        img: "/assets/images/adventure/Fly_Fishing_2.jpeg",
        title: "Virginia",
    },
    {
        img: "/assets/images/adventure/Free_Diving.png",
        title: "Virginia - Free Diving",
    },
    {
        img: "/assets/images/adventure/Nate_Canoe.jpeg",
        title: "Virginia",
    },
    {
        img: "/assets/images/adventure/Brookie_2.jpeg",
        title: "Virginia",
    },
    {
        img: "/assets/images/adventure/Brookie_4.jpeg",
        title: "Virginia",
    },
    {
        img: "/assets/images/adventure/Brookie_5.jpeg",
        title: "Virginia",
    },
    {
        img: "/assets/images/adventure/North_Laramie_7.jpeg",
        title: "Wyoming",
    },
    {
        img: "/assets/images/adventure/North_Laramie_2.jpg",
        title: "Wyoming",
    },
    {
        img: "/assets/images/adventure/North_Laramie_6.jpeg",
        title: "Wyoming",
    },
    {
        img: "/assets/images/adventure/North_Laramie_5.jpeg",
        title: "Wyoming",
    },
    {
        img: "/assets/images/adventure/North_Laramie_8.jpeg",
        title: "Wyoming",
    },
    {
        img: "/assets/images/adventure/North_Laramie_4.jpeg",
        title: "Wyoming",
    },
    {
        img: "/assets/images/adventure/WY_Repelling_1.jpeg",
        title: "Wyoming",
    },
    {
        img: "/assets/images/adventure/WY_Repelling_2.jpeg",
        title: "Wyoming",
    },
]

class Adventure extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lightboxIsOpen: false,
            currentImage: 0
        }
        this.closeLightbox = this.closeLightbox.bind(this)
    }
    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevLightboxImage() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNextLightboxImage() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="Adventure">
                <div className="backgroundImageContainer">


                    <p className="header">Adventure</p>
                    <p className="aboutMeText">
                        I was born in Denver Colorado and grew up in western Nebraska.
                        Because of my father and the environment I grew up in, I spent a lot of my time outside.
                        Me, my brother, and my father would often take trips to Colorado and Wyoming to go backpacking, hiking, fishing, mountain biking, and skiing.
                        When I was in middle school I became interested in fly-fishing. I got myself a rod and taught myself how to fish and
                        tie my own flies. Since then fishing has become my favorite activity. My favorite trips are backpacking into remote
                        places where not many people have gone and the fish are big. In 2013 my family moved to Virginia. I began to spend a lot of
                        time in the Blue Ridge mountains hiking and fly-fishing for small brook trout in the Virginia mountain streams. My wife Charity
                        loves the outdoors and adventure just as much as I do. She is my best friend and favorite person to go on adventures with. I will forever be
                        drawn to the outdoors and adventure. Below is a list of photos from trips that I have photos of.
                    </p>
                </div>
                <div className={classes.root}>
                    <GridList className={classes.gridList}>
                        {images.map((tile, index) => (
                            <GridListTile key={tile.img} style={{ height: "425px", width: '45%' }}>
                                <img src={tile.img} alt={tile.title} onClick={(event) => this.openLightbox(index, event)} className="image" />
                                <GridListTileBar
                                    title={tile.title}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <Lightbox
                    images={images.map(img => { return { src: img.img } })}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    onClickPrev={this.gotoPrevLightboxImage.bind(this)}
                    onClickNext={this.gotoNextLightboxImage.bind(this)}
                    onClose={this.closeLightbox}
                />

            </div>
        );
    }
}

Adventure.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Adventure);