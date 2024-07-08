import React, { useEffect,useState } from 'react';
import axios from "axios";

const ApiComponent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const res = await axios.get("https://ipapi.co/json");
        console.log(res.data);
        setData([res.data]);
    }

  return (
      <div className='card'>
          {data.map((obj) => {
              const {
                ip,
                network,
                version,
                city,
                region,
                region_code,
                country,
                country_name,
                country_code,
                country_code_iso3,
                country_capital,
                country_tld,
                continent_code,
                in_eu,
                postal,
                latitude,
                longitude,
                timezone,
                utc_offset,
                country_calling_code,
                currency,
                currency_name,
                languages,
                country_area,
                country_population,
                asn,
                org
              } = obj;
              return (
                <div className="small-cards">
                  <div className="small-card">
                    <p>ip</p>
                    <p>{ip}</p>
                  </div>
                  <div className="small-card">
                    <p>network</p>
                    <p>{network}</p>
                  </div>
                  <div className="small-card">
                    <p>version</p>
                    <p>{version}</p>
                  </div>
                  <div className="small-card">
                    <p>city</p>
                    <p>{city}</p>
                  </div>
                  <div className="small-card">
                    <p>region</p>
                    <p>{region}</p>
                  </div>
                  <div className="small-card">
                    <p>region_code</p>
                    <p>{region_code}</p>
                  </div>
                  <div className="small-card">
                    <p>country</p>
                    <p>{country}</p>
                  </div>
                  <div className="small-card">
                    <p>country_name</p>
                    <p>{country_name}</p>
                  </div>
                  <div className="small-card">
                    <p>country_code</p>
                    <p>{country_code}</p>
                  </div>
                  <div className="small-card">
                    <p>country_code_iso3</p>
                    <p>{country_code_iso3}</p>
                  </div>
                  <div className="small-card">
                    <p>country_capital</p>
                    <p>{country_capital}</p>
                  </div>
                  <div className="small-card">
                    <p>country_tld</p>
                    <p>{country_tld}</p>
                  </div>
                  <div className="small-card">
                    <p>continent_code</p>
                    <p>{continent_code}</p>
                  </div>
                  <div className="small-card">
                    <p>in_eu</p>
                    <p>{in_eu}</p>
                  </div>
                  <div className="small-card">
                    <p>postal</p>
                    <p>{postal}</p>
                  </div>
                  <div className="small-card">
                    <p>latitude</p>
                    <p>{latitude}</p>
                  </div>
                  <div className="small-card">
                    <p>longitude</p>
                    <p>{longitude}</p>
                  </div>
                  <div className="small-card">
                    <p>timezone</p>

                    <p>{timezone}</p>
                  </div>
                  <div className="small-card">
                    <p>utc_offset</p>
                    <p>{utc_offset}</p>
                  </div>
                  <div className="small-card">
                    <p>country_calling_code</p>
                    <p>{country_calling_code}</p>
                  </div>
                  <div className="small-card">
                    <p>currency</p>
                    <p>{currency}</p>
                  </div>
                  <div className="small-card">
                    <p>currency_name</p>
                    <p>{currency_name}</p>
                  </div>
                  <div className="small-card">
                    <p>languages</p>
                    <p>{languages.substring(1,4)}</p>
                  </div>
                  <div className="small-card">
                    <p>country_area</p>
                    <p>{country_area}</p>
                  </div>
                  <div className="small-card">
                    <p>country_population</p>
                    <p>{country_population}</p>
                  </div>
                  <div className="small-card">
                    <p>asn</p>
                    <p>{asn}</p>
                  </div>
                  <div className="small-card">
                    <p>org</p>
                    <p>{org}</p>
                  </div>
                </div>
              );
          })}
    </div>
  )
}

export default ApiComponent