import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { LuiBackground, LuiCardComponent } from '@jda/lui-common-component-library';
import { X } from '@jda/lui-common-icon-library';
const Home = () => {
  const cardJson = [
    {
      title: 'Blue Yonder Warehouse Map API',
      subTitle: 'Warehouse Management',
      description: 'The Sample Data API enables you to get information about the data that has been coreloaded, meaning the data that is available for the prediction models to analyse',
    },
    {
      title: 'Blue Yonder Vendor Order Proposals API',
      subTitle: 'Order Management',
      description: 'In order to deal gracefully with interface changes it is recommended to explicitly specify the interface and version in the Accept header of the request',
    },
    {
      title: 'Blue Yonder Vendor Order Proposals API Version 2',
      subTitle: 'Order Management Version 2',
      description: 'In order to deal gracefully with interface changes it is recommended to explicitly specify the interface and version in the Accept header of the request',
    }
    
  ];
  return (
    <Box overflow="hidden">
      <Box display="flex" justifyContent="flex-start">
        <LuiBackground>
          <Box p={2} display="flex" flexWrap="wrap">
            {cardJson.map((item, index) => (
              <Box m={1} key={index} width="400px;">
                <LuiCardComponent
                  title={item.title}
                  headerBordered
                  titleVariant="h5"
                  titleActions={
                    <Box>
                      <IconButton size="small" color="secondary" aria-label="Close Icon Button">
                        <X color="action" />
                      </IconButton>
                    </Box>
                  }
                >
                  <Box>{item.subTitle}</Box>
                  <Box>{item.description}</Box>
                </LuiCardComponent>
              </Box>
            ))}
          </Box>
        </LuiBackground>
      </Box>
    </Box>
  );
};
export default Home;