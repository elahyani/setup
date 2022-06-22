import { FaQuestionCircle, FaPlus, FaClipboardList } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdNotifications, MdSettings } from "react-icons/md";
import { routes } from "../routes";

export const headerItems = [
  {
    routeTo: routes.HELP,
    icon: (
      <FaQuestionCircle
        className="text-[#2b5b6c] rounded-full"
        size={"1.7rem"}
      />
    ),
  },
  {
    routeTo: "#",
    icon: (
      <FaPlus
        className="text-[#2b5b6c] rounded-full font-thin"
        size={"1.7rem"}
      />
    ),
  },
  {
    routeTo: "#",
    icon: (
      <MdNotifications className="text-[#2b5b6c] rounded-full" size={"2rem"} />
    ),
  },
  {
    routeTo: routes.TASKS,
    icon: <FaClipboardList className="text-[#2b5b6c]" size={"1.7rem"} />,
  },
  {
    routeTo: routes.SETTINGS,
    icon: (
      <MdSettings className="text-[#2b5b6c] rounded-full" size={"1.7rem"} />
    ),
  },
];
