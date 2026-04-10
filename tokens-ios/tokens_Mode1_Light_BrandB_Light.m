
//
// 
//

#import ".h"


NSString * const CoreBlueBlue00 = [UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f];
NSString * const CoreBlueBlue05 = [UIColor colorWithRed:0.902f green:0.937f blue:0.996f alpha:1.000f];
NSString * const CoreBlueBlue10 = [UIColor colorWithRed:0.765f green:0.851f blue:0.992f alpha:1.000f];
NSString * const CoreBlueBlue20 = [UIColor colorWithRed:0.573f green:0.725f blue:0.988f alpha:1.000f];
NSString * const CoreBlueBlue30 = [UIColor colorWithRed:0.380f green:0.600f blue:0.980f alpha:1.000f];
NSString * const CoreBlueBlue40 = [UIColor colorWithRed:0.188f green:0.475f blue:0.973f alpha:1.000f];
NSString * const CoreBlueBlue50 = [UIColor colorWithRed:0.031f green:0.365f blue:0.937f alpha:1.000f];
NSString * const CoreOrangeOrange00 = [UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f];
NSString * const CoreOrangeOrange05 = [UIColor colorWithRed:1.000f green:0.976f blue:0.961f alpha:1.000f];
NSString * const CoreOrangeOrange10 = [UIColor colorWithRed:0.992f green:0.859f blue:0.765f alpha:1.000f];
NSString * const CoreOrangeOrange20 = [UIColor colorWithRed:0.988f green:0.745f blue:0.573f alpha:1.000f];
NSString * const CoreOrangeOrange30 = [UIColor colorWithRed:0.980f green:0.627f blue:0.380f alpha:1.000f];
NSString * const CoreOrangeOrange40 = [UIColor colorWithRed:0.973f green:0.514f blue:0.188f alpha:1.000f];
NSString * const CoreOrangeOrange50 = [UIColor colorWithRed:0.937f green:0.408f blue:0.031f alpha:1.000f];
NSString * const SemanticNumber = 0;
NSString * const SemanticSurfacePrimary = [UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f];
NSString * const SemanticSurfaceSecondary = [UIColor colorWithRed:0.945f green:0.929f blue:0.894f alpha:1.000f];
NSString * const SemanticSurfaceTertiary = [UIColor colorWithRed:0.859f green:0.835f blue:0.765f alpha:1.000f];
NSString * const SemanticSurfaceBrandPrimary = [UIColor colorWithRed:0.463f green:0.094f blue:0.980f alpha:1.000f];
NSString * const SemanticSurfaceBrandSecondary = [UIColor colorWithRed:0.604f green:0.400f blue:0.949f alpha:1.000f];
NSString * const SemanticSurfaceSuccess = [UIColor colorWithRed:0.145f green:0.776f blue:0.035f alpha:1.000f];
NSString * const SemanticSurfaceDanger = [UIColor colorWithRed:0.937f green:0.129f blue:0.129f alpha:1.000f];
NSString * const SemanticSurfaceInformation = [UIColor colorWithRed:0.357f green:0.655f blue:0.882f alpha:1.000f];
NSString * const BrandsBrandLight = [UIColor colorWithRed:0.031f green:0.365f blue:0.937f alpha:1.000f];
NSString * const BrandsBrandDark = [UIColor colorWithRed:0.380f green:0.600f blue:0.980f alpha:1.000f];
NSString * const BrandsTextPrimaryLight = [UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f];
NSString * const BrandsTextPrimaryDark = [UIColor colorWithRed:0.122f green:0.153f blue:0.239f alpha:1.000f];
NSString * const BrandsTextSecondaryLight = [UIColor colorWithRed:0.753f green:0.835f blue:0.875f alpha:1.000f];
NSString * const BrandsTextSecondaryDark = [UIColor colorWithRed:0.243f green:0.325f blue:0.376f alpha:1.000f];
NSString * const BrandsSize00 = 0;
NSString * const BrandsSize10 = 0;
NSString * const BrandsTextTertiaryLight = [UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f];
NSString * const BrandsTextTertiaryDark = [UIColor colorWithRed:0.478f green:0.463f blue:0.463f alpha:1.000f];
NSString * const ModesBrand = [UIColor colorWithRed:0.380f green:0.600f blue:0.980f alpha:1.000f];
NSString * const ModesTextPrimary = [UIColor colorWithRed:0.122f green:0.153f blue:0.239f alpha:1.000f];
NSString * const ModesTextSecondary = [UIColor colorWithRed:0.243f green:0.325f blue:0.376f alpha:1.000f];

@implementation 

+ (NSArray *)values {
  static NSArray* array;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    array = @[
      @{
  @"value": [UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
  @"name": @"CoreBlueBlue00",
    @"category": @"Core",
    @"type": @"Blue",
    @"item": @"Blue00"
  },
@{
  @"value": [UIColor colorWithRed:0.902f green:0.937f blue:0.996f alpha:1.000f],
  @"name": @"CoreBlueBlue05",
    @"category": @"Core",
    @"type": @"Blue",
    @"item": @"Blue05"
  },
@{
  @"value": [UIColor colorWithRed:0.765f green:0.851f blue:0.992f alpha:1.000f],
  @"name": @"CoreBlueBlue10",
    @"category": @"Core",
    @"type": @"Blue",
    @"item": @"Blue10"
  },
@{
  @"value": [UIColor colorWithRed:0.573f green:0.725f blue:0.988f alpha:1.000f],
  @"name": @"CoreBlueBlue20",
    @"category": @"Core",
    @"type": @"Blue",
    @"item": @"Blue20"
  },
@{
  @"value": [UIColor colorWithRed:0.380f green:0.600f blue:0.980f alpha:1.000f],
  @"name": @"CoreBlueBlue30",
    @"category": @"Core",
    @"type": @"Blue",
    @"item": @"Blue30"
  },
@{
  @"value": [UIColor colorWithRed:0.188f green:0.475f blue:0.973f alpha:1.000f],
  @"name": @"CoreBlueBlue40",
    @"category": @"Core",
    @"type": @"Blue",
    @"item": @"Blue40"
  },
@{
  @"value": [UIColor colorWithRed:0.031f green:0.365f blue:0.937f alpha:1.000f],
  @"name": @"CoreBlueBlue50",
    @"category": @"Core",
    @"type": @"Blue",
    @"item": @"Blue50"
  },
@{
  @"value": [UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
  @"name": @"CoreOrangeOrange00",
    @"category": @"Core",
    @"type": @"Orange",
    @"item": @"Orange00"
  },
@{
  @"value": [UIColor colorWithRed:1.000f green:0.976f blue:0.961f alpha:1.000f],
  @"name": @"CoreOrangeOrange05",
    @"category": @"Core",
    @"type": @"Orange",
    @"item": @"Orange05"
  },
@{
  @"value": [UIColor colorWithRed:0.992f green:0.859f blue:0.765f alpha:1.000f],
  @"name": @"CoreOrangeOrange10",
    @"category": @"Core",
    @"type": @"Orange",
    @"item": @"Orange10"
  },
@{
  @"value": [UIColor colorWithRed:0.988f green:0.745f blue:0.573f alpha:1.000f],
  @"name": @"CoreOrangeOrange20",
    @"category": @"Core",
    @"type": @"Orange",
    @"item": @"Orange20"
  },
@{
  @"value": [UIColor colorWithRed:0.980f green:0.627f blue:0.380f alpha:1.000f],
  @"name": @"CoreOrangeOrange30",
    @"category": @"Core",
    @"type": @"Orange",
    @"item": @"Orange30"
  },
@{
  @"value": [UIColor colorWithRed:0.973f green:0.514f blue:0.188f alpha:1.000f],
  @"name": @"CoreOrangeOrange40",
    @"category": @"Core",
    @"type": @"Orange",
    @"item": @"Orange40"
  },
@{
  @"value": [UIColor colorWithRed:0.937f green:0.408f blue:0.031f alpha:1.000f],
  @"name": @"CoreOrangeOrange50",
    @"category": @"Core",
    @"type": @"Orange",
    @"item": @"Orange50"
  },
@{
  @"value": 0,
  @"name": @"SemanticNumber",
    @"category": @"Semantic",
    @"type": @"Number"
  },
@{
  @"value": [UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
  @"name": @"SemanticSurfacePrimary",
    @"category": @"Semantic",
    @"type": @"surface",
    @"item": @"primary"
  },
@{
  @"value": [UIColor colorWithRed:0.945f green:0.929f blue:0.894f alpha:1.000f],
  @"name": @"SemanticSurfaceSecondary",
    @"category": @"Semantic",
    @"type": @"surface",
    @"item": @"secondary"
  },
@{
  @"value": [UIColor colorWithRed:0.859f green:0.835f blue:0.765f alpha:1.000f],
  @"name": @"SemanticSurfaceTertiary",
    @"category": @"Semantic",
    @"type": @"surface",
    @"item": @"tertiary"
  },
@{
  @"value": [UIColor colorWithRed:0.463f green:0.094f blue:0.980f alpha:1.000f],
  @"name": @"SemanticSurfaceBrandPrimary",
    @"category": @"Semantic",
    @"type": @"surface",
    @"item": @"brandPrimary"
  },
@{
  @"value": [UIColor colorWithRed:0.604f green:0.400f blue:0.949f alpha:1.000f],
  @"name": @"SemanticSurfaceBrandSecondary",
    @"category": @"Semantic",
    @"type": @"surface",
    @"item": @"brandSecondary"
  },
@{
  @"value": [UIColor colorWithRed:0.145f green:0.776f blue:0.035f alpha:1.000f],
  @"name": @"SemanticSurfaceSuccess",
    @"category": @"Semantic",
    @"type": @"surface",
    @"item": @"success"
  },
@{
  @"value": [UIColor colorWithRed:0.937f green:0.129f blue:0.129f alpha:1.000f],
  @"name": @"SemanticSurfaceDanger",
    @"category": @"Semantic",
    @"type": @"surface",
    @"item": @"danger"
  },
@{
  @"value": [UIColor colorWithRed:0.357f green:0.655f blue:0.882f alpha:1.000f],
  @"name": @"SemanticSurfaceInformation",
    @"category": @"Semantic",
    @"type": @"surface",
    @"item": @"information"
  },
@{
  @"value": [UIColor colorWithRed:0.031f green:0.365f blue:0.937f alpha:1.000f],
  @"name": @"BrandsBrandLight",
    @"category": @"Brands",
    @"type": @"brand-light"
  },
@{
  @"value": [UIColor colorWithRed:0.380f green:0.600f blue:0.980f alpha:1.000f],
  @"name": @"BrandsBrandDark",
    @"category": @"Brands",
    @"type": @"brand-dark"
  },
@{
  @"value": [UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
  @"name": @"BrandsTextPrimaryLight",
    @"category": @"Brands",
    @"type": @"text-primary-light"
  },
@{
  @"value": [UIColor colorWithRed:0.122f green:0.153f blue:0.239f alpha:1.000f],
  @"name": @"BrandsTextPrimaryDark",
    @"category": @"Brands",
    @"type": @"text-primary-dark"
  },
@{
  @"value": [UIColor colorWithRed:0.753f green:0.835f blue:0.875f alpha:1.000f],
  @"name": @"BrandsTextSecondaryLight",
    @"category": @"Brands",
    @"type": @"text-secondary-light"
  },
@{
  @"value": [UIColor colorWithRed:0.243f green:0.325f blue:0.376f alpha:1.000f],
  @"name": @"BrandsTextSecondaryDark",
    @"category": @"Brands",
    @"type": @"text-secondary-dark"
  },
@{
  @"value": 0,
  @"name": @"BrandsSize00",
    @"category": @"Brands",
    @"type": @"size00"
  },
@{
  @"value": 0,
  @"name": @"BrandsSize10",
    @"category": @"Brands",
    @"type": @"size10"
  },
@{
  @"value": [UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
  @"name": @"BrandsTextTertiaryLight",
    @"category": @"Brands",
    @"type": @"text-tertiary-light"
  },
@{
  @"value": [UIColor colorWithRed:0.478f green:0.463f blue:0.463f alpha:1.000f],
  @"name": @"BrandsTextTertiaryDark",
    @"category": @"Brands",
    @"type": @"text-tertiary-dark"
  },
@{
  @"value": [UIColor colorWithRed:0.380f green:0.600f blue:0.980f alpha:1.000f],
  @"name": @"ModesBrand",
    @"category": @"Modes",
    @"type": @"brand"
  },
@{
  @"value": [UIColor colorWithRed:0.122f green:0.153f blue:0.239f alpha:1.000f],
  @"name": @"ModesTextPrimary",
    @"category": @"Modes",
    @"type": @"text-primary"
  },
@{
  @"value": [UIColor colorWithRed:0.243f green:0.325f blue:0.376f alpha:1.000f],
  @"name": @"ModesTextSecondary",
    @"category": @"Modes",
    @"type": @"text-secondary"
  }
    ];
  });

  return array;
}

@end

