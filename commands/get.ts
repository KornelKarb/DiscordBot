import axios from "axios";
import { ICommand } from "wokcommands";

export default {
  category: "Api",
  description: "F1",
  permissions: ["ADMINISTRATOR"],
  maxArgs: 1,
  expectedArgs: "<id>",
  expectedArgsTypes: ["NUMBER"],
  slash: "both",
  testOnly: true,

  callback: async ({ args }) => {
    let uri = "https://f1-live-motorsport-data.p.rapidapi.com/drivers/2020";

    const { data } = await axios.get(uri);
    console.log(data);
  },
} as ICommand;
