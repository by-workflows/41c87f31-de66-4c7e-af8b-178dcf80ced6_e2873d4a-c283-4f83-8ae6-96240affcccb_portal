import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { LuiBackground, LuiCardComponent } from '@jda/lui-common-component-library';
import { X } from '@jda/lui-common-icon-library';
const Home = () => {
  const cardJson = [
    {
      title: 'MFE_1',
      subTitle: 'Warehouse Management',
      description: 'Demo content goes Here',
    },
    {
      title: 'MFE_2',
      subTitle: 'Order Management',
      description: 'Demo content goes Here',
    },
  ];
  return (
    <Box overflow="hidden">
      <Box display="flex" justifyContent="flex-start">
        <LuiBackground>
          <Box p={2}>
            {cardJson.map((item, index) => (
              <Box m={1} key={index}>
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