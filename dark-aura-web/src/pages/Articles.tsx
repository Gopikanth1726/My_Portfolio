import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const certifications = [
	{
		id: 1,
		title: 'Full Stack Development',
		description: 'by NoviTech.Power- Issued June 2024',
		image: '/certificate-novitech.jpg', // Place your certificate image in public folder
		organization: 'NoviTech',
		verifyUrl: 'https://drive.google.com/file/d/1x55qVy0I72SztUiDXLWvKkPtN9fDC4xQ/view?usp=sharing',
		featured: true
	},
  {
		id: 2,
		title: 'Java Full Stack',
		description: 'by Six Phrase- Issued July 2025',
		image: '/certificate-six.jpg', // Place your certificate image in public folder
		organization: 'Six Phrase',
		verifyUrl: 'https://drive.google.com/file/d/1MZMHmOCNDV9NKfJD9ZlxMeLzaLIRYDtX/view?usp=sharing',
		featured: true
	}
	// Add more certificates as needed
];

const Certifications = () => {
	const featuredCerts = certifications.filter(cert => cert.featured);
	const otherCerts = certifications.filter(cert => !cert.featured);

	return (
		<div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
						My Certifications
					</h1>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Here are some of my professional certifications. Click to view or
						verify.
					</p>
				</motion.div>

				{/* Featured Certifications */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mb-16"
				>
					<h2 className="text-3xl font-bold text-primary mb-8">
						Featured Certifications
					</h2>
					<div className="grid lg:grid-cols-2 gap-8">
						{featuredCerts.map((cert, index) => (
							<motion.div
								key={cert.id}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
								whileHover={{ y: -5 }}
								className="group"
							>
								<Card className="overflow-hidden glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
									<div className="relative overflow-hidden">
										<img
											src={cert.image}
											alt={cert.title}
											className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
										/>
										<div className="absolute top-4 right-4">
											<Badge className="bg-primary/20 text-primary border-primary/40">
												Featured
											</Badge>
										</div>
									</div>
									<div className="p-6">
										<h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
											{cert.title}
										</h3>
										<p className="text-muted-foreground mb-4 leading-relaxed">
											{cert.description}
										</p>
										<div className="flex gap-3">
											<a
												href={cert.verifyUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Button
													size="sm"
													variant="outline"
													className="border-primary text-primary hover:bg-primary hover:text-black"
												>
													View Certificate
												</Button>
											</a>
										</div>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Other Certifications */}
				{otherCerts.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<h2 className="text-3xl font-bold text-secondary mb-8">
							Other Certifications
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{otherCerts.map((cert, index) => (
								<motion.div
									key={cert.id}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
									whileHover={{ y: -5 }}
									className="group"
								>
									<Card className="overflow-hidden glass-effect border-muted hover:border-secondary/40 transition-all duration-300 h-full">
										<div className="relative overflow-hidden">
											<img
												src={cert.image}
												alt={cert.title}
												className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
											/>
										</div>
										<div className="p-5">
											<h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
												{cert.title}
											</h3>
											<p className="text-muted-foreground text-sm mb-4 leading-relaxed">
												{cert.description}
											</p>
											<div className="flex gap-2">
												<a
													href={cert.verifyUrl}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Button size="sm" variant="outline" className="flex-1 text-xs">
														View
													</Button>
												</a>
											</div>
										</div>
									</Card>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Certifications;