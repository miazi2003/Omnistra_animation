export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[#1d2941] bg-[#030712] text-white">
      <div className="mx-auto flex w-full max-w-[1164px] flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-[1rem] font-semibold tracking-[0.06em] uppercase">
            Chargeflow
          </h3>
          <p className="mt-3 max-w-[420px] text-[0.95rem] text-white/80">
            Prevent disputes, recover revenue, and streamline operations in one
            unified platform.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-[0.95rem]">
          <div className="space-y-2">
            <p className="font-semibold">Product</p>
            <p className="text-white/80">Automation</p>
            <p className="text-white/80">Alerts</p>
            <p className="text-white/80">Integrations</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Company</p>
            <p className="text-white/80">About</p>
            <p className="text-white/80">Careers</p>
            <p className="text-white/80">Contact</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1d2941] py-4 text-center text-[0.85rem] text-white/70">
        © {new Date().getFullYear()} Chargeflow. All rights reserved.
      </div>
    </footer>
  );
}
