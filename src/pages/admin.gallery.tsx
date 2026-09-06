
import { getAdminGalleryFn } from "@/server/admin";
import { useQuery } from "@tanstack/react-query";

function AdminGallery() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["admin", "gallery"],
    queryFn: () => getAdminGalleryFn(),
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-medium tracking-tight">Gallery</h1>
          <p className="text-muted-foreground mt-2">Manage photos, events, and memories.</p>
        </div>
        <button className="bg-foreground text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors">
          Upload Photo
        </button>
      </div>

      <div className="rounded-md border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-3 font-medium">Image</th>
                <th className="px-6 py-3 font-medium">Title</th>
                <th className="px-6 py-3 font-medium">Category</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">Loading...</td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">No photos found.</td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="w-16 h-12 rounded bg-muted overflow-hidden">
                        <img src={item.imageUrl} alt={item.title || "Gallery"} className="w-full h-full object-cover" />
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium">{item.title || "—"}</td>
                    <td className="px-6 py-4">{item.category || "—"}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        item.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {item.active ? "Published" : "Hidden"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-teal hover:underline text-sm font-medium">Edit</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminGallery;
