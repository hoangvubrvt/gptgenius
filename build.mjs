import { execSync } from 'child_process';

// Read environment variable
const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkKey) {
    console.error('Error: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is not set.');
    process.exit(1);
}

// Run the Next.js build command with the environment variable
try {
    console.log('Building the application...');
    execSync(`cross-env NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${clerkKey} next build`, {
        stdio: 'inherit', // Show output in the console
    });
    console.log('Build completed successfully!');
} catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
}