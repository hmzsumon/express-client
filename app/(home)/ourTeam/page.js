import Navbar from '@/app/components/Shared/Navbar/Navbar';
import OurTeamBanner from '@/app/components/OurTeamPage/OurTeamBanner';
import Footer from '@/app/components/Shared/Footer/Footer';
import TeamMembers from '@/app/components/OurTeamPage/TeamMembers';

const OurTeam = () => {
	return (
		<div className='custom__BG'>
			<OurTeamBanner />
			<TeamMembers />
		</div>
	);
};

export default OurTeam;
