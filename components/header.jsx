import { IoNotificationsOutline, IoCalendarOutline } from 'react-icons/io5';


const Header = () => {
    return (
      <div style={{
        height: '50px',
        background: '#eee',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%"  // Set to full width of the viewport
      }}>
        <div style={{ flexGrow: 1, display: 'flex' }}>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>All Reports</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Event Details</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Event</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>OKR</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>My Reports</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Custom Reports</a>
          <a href="#" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Financial Reports</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <IoCalendarOutline style={{ color: 'gray', margin: '0 10px', fontSize: '1.2em' }} />
          <IoNotificationsOutline style={{ color: 'gray', margin: '0 10px', fontSize: '1.2em' }} />
          <span style={{ margin: '0 10px' }}>...</span>
        <span style={{ margin: '0 10px', fontWeight: 'bold' }}>Erik Brown</span>
    

        
        </div>
      </div>
    );
};

export default Header;
