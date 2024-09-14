const fullDataToLocationData = ({ results: [info] }) =>
    Object.assign(
        {
            address: {
                full: '',
                houseNumber: '',
                street: '',
                city: '',
                region: '',
                country: '',
                postalCode: '',
            },
            pluscode: '',
            coords: {
                lat: '',
                lng: '',
            },
        },
        {
            address: {
                full: info.formatted_address,
                houseNumber: info.address_components.filter(({ types }) => types.includes('street_number'))[0]?.long_name,
                street: info.address_components.filter(({ types }) => types.includes('route'))[0]?.long_name,
                city: info.address_components.filter(({ types }) => types.includes('locality'))[0].long_name,
                region: info.address_components.filter(({ types }) => types.includes('administrative_area_level_1'))[0].long_name,
                country: info.address_components.filter(({ types }) => types.includes('country'))[0].long_name,
                postalCode: info.address_components.filter(({ types }) => types.includes('postal_code'))[0]?.long_name,
            },
            pluscode: info?.plus_code?.global_code,
            coords: info.geometry.location,
        },
    );

export default fullDataToLocationData;
