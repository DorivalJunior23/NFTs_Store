import React, { useState } from "react";

import { Container, Row,  Col } from "reactstrap";
import CommonSection from "../components/ui/CommonSection/CommonSection";
import NftCard from "../../src/components/ui/Nft-card/NftCard";
import {NFT__DATA} from '../assets/data/data.js'
import '../styles/market.css'

const Market = () => {
    const [data, setData] = useState(NFT__DATA);

    const handleCategory = () => {};

    const handleItems = (e) =>{
        const filterValue = e.target.value;
        if(filterValue==="all"){
            setData(NFT__DATA);
        }else{
           const filterData = NFT__DATA.filter((item)=> item.title === filterValue);
        
        setData(filterData); 
        }
    };

    const handleSort = (e) => {
        const filterValue = e.target.value;

       if(filterValue === "high"){
        const filterData = NFT__DATA.filter((item) => item.currentBid >= 6);

        setData(filterData);
       }

       else if(filterValue === "mid"){
        const filterData = NFT__DATA.filter(
            (item) => item.currentBid >= 5.5 && item.currentBid < 6
            );

        setData(filterData);
       }

       else if(filterValue === "low"){
        const filterData = NFT__DATA.filter((item) => item.currentBid < 5.5);

        setData(filterData);
       }

       else{
        setData(NFT__DATA);
       }


    }
    return(
        <>
            <CommonSection title="MarketPlace"/>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-5">
                        <div className="market__product__filter d-flex align-items-center justify-content-between">
                            <div className="left__filter d-flex align-items-center gap-5">
                                <div className="all__category__filter">
                                    <select onChange={handleCategory}>
                                        <option>All Categories</option>
                                        <option value="music">Music</option>
                                        <option value="art">Art</option>
                                    </select>
                                </div>

                                <div className="all__items_filter">
                                    <select onChange={handleItems}>
                                        <option value="all">All Items</option>
                                        <option value="Travel Monkey Club">Travel Monkey Club</option>
                                        <option value="Sir Lion Swag">Sir Lion Swag</option>
                                        <option value="Civilian">Civilian</option>
                                        <option value="Guard">Guard</option>
                                    </select>
                                </div>
                                <div className="filter__right">
                                    <select onChange={handleSort}>
                                        <option>Short By</option>
                                        <option value="high">High Rate</option>
                                        <option value="mid">Mid Rate</option>
                                        <option value="low">Low Rate</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                        </Col>
                        {data?.map((item)=>(
                            <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                            <NftCard item={item} />
                            </Col>
                        ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Market;