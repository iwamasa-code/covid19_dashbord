import React from 'react'
import styles from "./Cards.module.css"
import CountUp from "react-countup"
import { Card, CardContent, Typography, Grid } from "@material-ui/core"

import { GiHastyGrave } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

//データの情報を取得する為
import { useSelector } from "react-redux";
import { selectData } from "../covidSlice"

const Cards:React.FC = () => {
    const data = useSelector(selectData);
    return (
        <div className={styles.container} >
            {/*感染者数を表すCard */}
            <Grid container spacing={1} justify="center">
                <Grid item xs={12} md={3} component={Card} className={styles.infected}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <MdLocalHospital />
                            Infected persons
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={data.confirmed.value}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
             {/*感染者数を表すCard */}

             {/*回復者数を表すCard */}
                <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <AiFillLike />
                            Recovered persons
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={data.recovered.value}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
             {/*回復者数を表すCard */}

             {/*死者数を表すCard */}
                <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <GiHastyGrave />
                            Dead persons
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={data.deaths.value}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
             {/*死者数を表すCard */}

            </Grid>
        </div>
    )
}

export default Cards
