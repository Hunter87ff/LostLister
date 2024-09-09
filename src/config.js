// import mongoose from "mongoose";
// mongoose.connect(process.env.REACT_APP_MONGO_URI)

interface Item {
    id: number;
    created_at: Date;
    title: string;
    details: string; // Description of the item
    resolved: boolean; // Whether the item has been resolved
    owner?: string|undefined; // Optional owner property might be missing
    founded_by: string;
    founded_at: string; // the place where the item was found
    reports: number;
    image_url: string; // Optional image URL
  }
  
export const items_data_model: Item[] = [
    {
      id: 7823547234,
      created_at: new Date(), // Assuming datetime.datetime.now() translates to a Date object
      title: "Lost Pendrive",
      details: "32gb pendrive, red color",
      resolved: true,
      owner: "bwubca23654",
      founded_by: "bwubca22245",
      founded_at: "UB6 314, insdide the desk of last bench",
      reports: 0,
      image_url: "https://img.freepik.com/premium-photo/crimson-flash-drive-isolated-clean-white-background-clear-png-white-background_94628-93417.jpg?semt=ais_hybrid",
    },
  ];

