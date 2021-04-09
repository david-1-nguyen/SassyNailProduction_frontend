import React from 'react'
import HomePageBanner from "../Components/HomePageBanner";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardGroup,
    CardHeader,
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    HeaderSubheader,
    Icon,
    Image,
    Segment
} from "semantic-ui-react";
import {useViewport} from "../context/mobile";

function Home(props) {

    const changeRoute = () => {
        props.history.push('/bookings')
    }

    const size = useViewport()
    const mobileItems = size.width < 500 ? 1 : 3

    return (
        <div>
            <HomePageBanner props={props}
                            big_header_text='Sassy Nails Spa'
                            subtext='Walk in or Make an appointment'
            />
            <Container>
                <Grid>
                    <GridRow>
                        <GridColumn width={10}>
                            <Header>
                                OPTIMIZE YOUR SPA EXPERIENCE
                                <Header size='huge'>
                                    Our new website is a Work-In-Progress! For any inquiries, call us for clarifications!
                                    <HeaderSubheader>
                                        We are here to make your spa experience the best it can be.
                                    </HeaderSubheader>
                                </Header>
                                <Button animated='fade' onClick={changeRoute} primary>
                                    <Button.Content visible>Make an Appointment Now!</Button.Content>
                                    <Button.Content hidden><Icon name='right arrow'/></Button.Content>
                                </Button>
                            </Header>
                        </GridColumn>
                        <GridColumn width={6}>
                            <Image src="https://i.ibb.co/HXdzn06/opi-nail-lacquer.png"/>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Container>
            <Grid>
                <GridRow>
                    <GridColumn width={16}>
                        <Segment placeholder>
                            <Header size='huge' textAlign='center'>
                                Services We Provide
                                <HeaderSubheader>
                                    We provide excellent services as well as build intimate relationships with our
                                    customers.
                                    <br/>Here are some of the basic services we provide.
                                </HeaderSubheader>
                            </Header>
                            <Container>
                                <CardGroup itemsPerRow={mobileItems}>
                                    <Card>
                                        <Image
                                            src='https://i.ibb.co/6DZZF0Q/lipstick-hand.jpg'
                                            rounded/>
                                        <CardContent>
                                            <CardHeader>
                                                Manicures
                                            </CardHeader>
                                            <CardDescription>
                                                Regular manicures, gel manicures, and deluxe manicure.
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <Image
                                            src='https://i.ibb.co/8c9w71J/vinegar-manicure.jpg'
                                            rounded/>
                                        <CardContent>
                                            <CardHeader>
                                                Pedicures
                                            </CardHeader>
                                            <CardDescription>
                                                Regular pedicure, gel pedicure, and deluxe pedicure.
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <Image
                                            src='https://i.ibb.co/7XyXHNn/waxbrow-fullface.jpg'
                                            rounded/>
                                        <CardContent>
                                            <CardHeader>
                                                Waxings
                                            </CardHeader>
                                            <CardDescription>
                                                Different waxing options available.
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                </CardGroup>
                            </Container>
                        </Segment>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>

    )
}

export default Home
