import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://images.unsplash.com/photo-1542137722061-efd1cbdf156c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address: "Some address 5, 12345, some city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://images.unsplash.com/photo-1542241647-9cbbada2b309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    address: "Some address 6, 12345, some city",
    description: "This is a first meetup",
  },
];

function HomePage() {
  return (
  <MeetupList meetups={DUMMY_MEETUPS}/>
  )
}

export default HomePage;