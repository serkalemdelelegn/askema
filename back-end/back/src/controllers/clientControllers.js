const Client = require('../models/clientModel');

const getClient = async (req, res) => {
  const { clientId } = req.params;
  try {
    if (clientId) {
      const client = await Client.findById(clientId);
      if (client) {
        res.json(client);
      } else {
        res.status(404).json({ message: 'Client not found' });
      }
    } else {
      const clients = await Client.find();
      res.json(clients);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const createClient = async (req, res) => {
  const { name, testimonial } = req.body;
  const image = {
    name: req.file.originalname,
    data: req.file.buffer,
    contentType: req.file.mimetype
  };
  try {
    const newClient = new Client({
      name,
      testimonial,
      image
    });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const updateClient = async (req, res) => {
  const { clientId } = req.params;
  const { name, testimonial } = req.body;
  const updateData = { name, testimonial };
  
  if (req.file) {
    updateData.image = {
      name: req.file.originalname,
      data: req.file.buffer,
      contentType: req.file.mimetype
    };
  }

  try {
    const updatedClient = await Client.findByIdAndUpdate(clientId, updateData, { new: true });
    if (updatedClient) {
      res.json(updatedClient);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const deleteClient = async (req, res) => {
  const { clientId } = req.params;
  try {
    const deletedClient = await Client.findByIdAndDelete(clientId);
    if (deletedClient) {
      res.json({ message: 'Client deleted successfully' });
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getClient, createClient, updateClient, deleteClient };
