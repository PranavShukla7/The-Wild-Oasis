import { useState } from "react";

import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/Sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>

      <Row type="horizontal" align="center" gap="16px" margin="24px 0 0 0">
        <Button onClick={() => setShowForm((show) => !show)}>
          Add New Cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
