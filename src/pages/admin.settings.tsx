
import { useQuery } from "@tanstack/react-query";
import { getSettingsFn } from "@/lib/data";

function AdminSettings() {
  const { data: settings, isLoading } = useQuery({
    queryKey: ["admin", "settings"],
    queryFn: () => getSettingsFn(),
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-medium tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your institute details and website configuration.</p>
        </div>
        <button className="bg-foreground text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors">
          Save Settings
        </button>
      </div>

      <div className="rounded-md border border-border bg-card p-6">
        {isLoading ? (
          <div className="text-muted-foreground">Loading...</div>
        ) : (
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Institute Name</label>
                <input 
                  type="text" 
                  defaultValue={settings?.institute_name} 
                  className="w-full border-b border-border bg-transparent py-2 outline-none focus:border-teal" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tagline</label>
                <input 
                  type="text" 
                  defaultValue={settings?.tagline} 
                  className="w-full border-b border-border bg-transparent py-2 outline-none focus:border-teal" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Primary Phone</label>
                <input 
                  type="text" 
                  defaultValue={settings?.phone_primary} 
                  className="w-full border-b border-border bg-transparent py-2 outline-none focus:border-teal" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">WhatsApp Number</label>
                <input 
                  type="text" 
                  defaultValue={settings?.whatsapp_number} 
                  className="w-full border-b border-border bg-transparent py-2 outline-none focus:border-teal" 
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Address Line</label>
                <input 
                  type="text" 
                  defaultValue={settings?.address_line} 
                  className="w-full border-b border-border bg-transparent py-2 outline-none focus:border-teal" 
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AdminSettings;
