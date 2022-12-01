import NavigationBar from '../nav-bar';

export default function AppLayout({ children }) {
  return (
    <div className="w-full grid grid-cols-[17%_83%] h-screen">
      <section className="h-[100vh] w-full bg-white border-r border-[#DBDBDB]">
        <NavigationBar />
      </section>
      <section className="py-6 w-full bg-[#FAFAFA] overflow-y-scroll">
        {children}
      </section>
    </div>
  );
}
