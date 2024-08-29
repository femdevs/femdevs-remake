import Footer from "#/components/Footer";
import Nav from "#/components/Nav";
import Image from "next/image";
import { ProjectsGroups } from '@crowdin/crowdin-api-client';

// initialization of ProjectsGroups
const projectsGroupsApi = new ProjectsGroups({
  token: 'personalAccessToken',
  organization: 'organizationName' // optional
});

// get project list
projectsGroupsApi.listProjects()
  .then(projects => console.log(projects))
  .catch(error => console.error(error));


/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Homepage',
  description: 'The homepage of The FemDevs',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The FemDevs Homepage',
    description: 'The homepage of The FemDevs',
    url: '/',
  },
  twitter: {
    title: 'The FemDevs Homepage',
    description: 'The homepage of The FemDevs',
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      
      <Footer />
    </>
  );
}
