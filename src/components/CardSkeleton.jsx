import React from 'react';
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const CardSkeleton = () => {
  const numbers = [{
    "id": 1
  }, {
    "id": 2
  }, {
    "id": 3
  }, {
    "id": 4
  }, {
    "id": 5
  }, {
    "id": 6
  }, {
    "id": 7
  }, {
    "id": 8
  }, {
    "id": 9
  }, {
    "id": 10
  }, {
    "id": 11
  }, {
    "id": 12
  }]
  return (
    <React.Fragment>
      {numbers.map((item, index)=>{
        return(
          <Stack spacing={1} key={index}>
            <Skeleton animation="wave" variant="rounded"  height={270} />
            <Stack direction="row-reverse" spacing={1}>
              <Skeleton animation="wave" variant="rounded" height={20} />
              <Skeleton animation="wave" variant="rounded" width={150} height={20} />
            </Stack>
            <Skeleton animation="wave" variant="rounded" height={50} />
          </Stack>
        )
      })}
    </React.Fragment>
  )
}

export default CardSkeleton;