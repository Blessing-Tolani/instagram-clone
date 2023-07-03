import NavigationBar from '../nav-bar';

export default function AppLayout({ children }) {
  return (
    <section>
      <div className="w-full grid lg:grid-cols-[17%_83%] h-screen ">
        <section className="h-[100vh] w-full bg-white border-r border-[#DBDBDB] max-lg:hidden">
          <NavigationBar />
        </section>
        <section className="py-6 w-full bg-[#F1FDF4] lg:bg-[#FAFAFA] overflow-y-scroll">
          {children}
        </section>
      </div>
    </section>
  );
}
