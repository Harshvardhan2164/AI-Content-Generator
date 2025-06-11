/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_mdFe6wr3WkIc@ep-small-smoke-a1wd1fhi-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
    }
}