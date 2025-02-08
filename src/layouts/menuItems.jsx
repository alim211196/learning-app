import {
  Dashboard,
  SupervisedUserCircle,
  People,
  MenuBook,
  Groups,
  Feedback,
  FormatListNumbered,
} from "@mui/icons-material";

export const menuItems = [
  { name: "Dashboard", icon: <Dashboard />, path: "/admin" },
  { name: "Role", icon: <SupervisedUserCircle />, path: "/admin/role" },
  { name: "Admin", icon: <People />, path: "/admin/admin-listing" },
  { name: "Course", icon: <MenuBook />, path: "/admin/course-listing" },
  {
    name: "Instructor",
    icon: <Groups />,
    path: "/admin/instructor-listing",
  },
  {
    name: "Testimonial",
    icon: <Feedback />,
    path: "/admin/testimonial-listing",
  },
  { name: "Faqs", icon: <FormatListNumbered />, path: "/admin/faqs-listing" },
  // Add more items as needed
];
