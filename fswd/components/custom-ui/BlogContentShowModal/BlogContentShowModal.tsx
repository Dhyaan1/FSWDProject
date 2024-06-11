import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";

const SlideUp = {
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      delay: 0.4,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function BlogContentShowModal({
  handleClose,
  SelectedPostData,
}) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        variants={SlideUp}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="overflow-hidden w-full max-w-3xl max-md:max-w-xl max-sm:max-w-md max-sm:max-h-[97svh] rounded-3xl bg-white border border-gray-200 shadow-md"
      >
        <img
          src={
            SelectedPostData?.image
              ? SelectedPostData?.image
              : "/placeholder.svg"
          }
          alt={SelectedPostData?.title}
          className="rounded-3xl object-cover aspect-[3/2] w-full h-80"
        />
        <div className="p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{SelectedPostData?.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <UserIcon className="w-4 h-4" />
                <span>{SelectedPostData?.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                <span>{SelectedPostData?.publish_date}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 max-h-[200px]">
            {SelectedPostData?.category && (
              <div className="bg-gray-200 px-2 py-1 rounded-md text-gray-600">
                {SelectedPostData?.category}
              </div>
            )}
            {SelectedPostData?.tags?.map((tag) => (
              <div
                key={tag}
                className="bg-gray-200 px-2 py-1 rounded-md text-gray-600"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="max-sm:hidden">
            <p>{SelectedPostData?.excerpt}</p>
          </div>
          <div className="prose prose-sm dark:prose-invert max-h-[200px] overflow-auto">
            <p>{SelectedPostData?.content}</p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
