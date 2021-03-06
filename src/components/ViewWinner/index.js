import React, { useState } from "react";
import LuckLadabi from "../../clients/Luckylads.json";
import { contractAddress } from "../../clients/constant";
import { Button, Modal } from "react-bootstrap";
import { ethers } from "ethers";
import { Raftag } from "../Tag";
import { Tag3 } from "../../view/Raffle/Raffle.style";

const ViewWinner = () => {
  let url = "https://rpc-mainnet.maticvigil.com/";
  let customHttpProvider = new ethers.providers.JsonRpcProvider(url);
  const [round, setRound] = useState(0);
  const [message, setMessage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setRound(e.target.value);
  };

  const fetchWinner = async () => {
    const Luck = new ethers.Contract(
      contractAddress,
      LuckLadabi,
      customHttpProvider
    );
    let result = await Luck.viewWinners(round);
    let winners = result.join(" , ");
    setMessage(winners);
  };

  return (
    <div>
      <label for="Days">
        <Tag3>Check winners for:</Tag3>
      </label>
      <select className="select" onChange={handleChange} id="Days" name="Days">
        <option value="0">Day 1</option>
        <option value="1">Day 2</option>
        <option value="2">Day 3</option>
        <option value="3">Day 4</option>
        <option value="4">Day 5</option>
      </select>
      <Button onClick={() => [fetchWinner(), handleShow()]}>
        Check winners
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Winner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Raftag>Winners of the day: {message}</Raftag>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewWinner;
